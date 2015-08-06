var exec = require('child_process').spawnSync;
var fs = require('fs');
var path = require('path');
var _ = require('lodash');
module.exports = function(out_dir) {
	exec('yuidoc', ['-p', '-C', '-o', out_dir, '.']);

	var filePath = path.resolve(out_dir, 'data.json');
	if (!fs.existsSync(filePath)) {
		console.log(filePath, 'file not exist');
		return;
	}

	var yui_json;
	try {
		yui_json = JSON.parse(fs.readFileSync(filePath));
	} catch (e) {}
	if (!yui_json || !_.size(yui_json.classes)) return;


	function BufferMd(file_path) {
		this.buffer = '';
		this._file_path = file_path;
	}
	BufferMd.prototype.writeMd = function(str) {
		this.buffer += str;
	};
	BufferMd.prototype.done = function() {
		this.buffer = this.buffer.split('_').join('\\_');
		// console.log(this.buffer.split('_'));
		fs.writeFileSync(this._file_path, this.buffer);
	};

	var classes = yui_json.classes;
	var methods = yui_json.classitems;
	var baseUrl = out_dir;
	_.forEach(classes, function(n, key) {
		var _file_path = baseUrl + '/' + key + '.md';
		var md_file = new BufferMd(_file_path);
		md_file.writeMd('# ' + n.name + '\n');
		md_file.writeMd('`' + n.file + '`' + '\n');
		if (n.description)
			md_file.writeMd('> ' + n.description + '\n\n');
		md_file.writeMd('## methods' + '\n');
		md_file.writeMd('-------------------' + '\n\n');
		_.forEach(methods, function(nn, kkey) {
			if (nn.class === n.name && nn.name) {
				md_file.writeMd('### ' + nn.name + '\n\n');
				md_file.writeMd('> ' + nn.description + '\n\n');
				md_file.writeMd('`parameter`' + '\n\n');
				//gen parameter
				_.forEach(nn.params, function(n, key) {
					md_file.writeMd('* `' + n.type + '` ' + n.name + ' - ' + n.description);
					if (n.optional) {
						md_file.writeMd(' `optional`');
					}
					md_file.writeMd('\n\n');
				});
				md_file.writeMd('`return`' + '\n\n');
				if (nn.return) {
					md_file.writeMd('* ' + '`' + nn.return.type + '` ' + nn.return.description.replace(/(\r\n|\n|\r||\n\t||\r\n\t)/gm, '') + '\n\n');
				}
				//只读取第一个example
				if (nn.example) {
					md_file.writeMd('`example`\n');
					md_file.writeMd(nn.example + '\n\n');
				}
			}
		});

		md_file.done();
	});
	//生成index.md

	var index_file = new BufferMd(baseUrl + '/home.md');
	index_file.writeMd('#home\n');
	index_file.writeMd('-------------\n');
	_.forEach(classes, function(n, key) {

		index_file.writeMd('[' + n.name + ']' + '(' + n.name + ')' + '\n\n');
	});
	index_file.done();


	//删除临时文件
	fs.unlink(filePath);

};
