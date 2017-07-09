var student = require('./student')
var teacher = require('./teacher')

 teacher.add('xiaohong')

 function add(teacherName,students){
 	teacher.add(teacherName)

 	students.forEach(function(item,index){
 		student.add(item)
 	})
 }

 exports.add = add		/*模块成为一个传统的模块实例，是module.exports的辅助方法*/
 module.exports = add	/*模块成为一个特殊的对象类型*/
