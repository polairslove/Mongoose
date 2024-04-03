## 简单版
### 使用上次的employees集合，完成mongoose组件的CURD

​	1.	参考models中的produceModel.js，新建employeesModel.js

```javascript

const mongoose = require("mongoose"); //引入mongoose组件
const employeeSchema = mongoose.Schema(
  {
    
    name: {
      type: String, //存储类型string
      required: [true, "Please add the user name"], //required:true 表示改字段为必填项
    },
    job: {
      type: String
    }
  });
// 使用model模式，实例化当前的employees集合并采用schema校验逻辑
module.exports = mongoose.model("employees", employeeSchema, "employees");


```

 2. 参考simplly-find.js ，新建 s_find_employees.js [文件名可以自己定义]，用于查找 employees 集合

```javascript

    const connectDb = require("./dbConnection");	//引入数据库连接
    // 引入model，此时const后的Employee就相当于数据库的Employee集合
    const Employee = require("./models/employeesModel");
    
    //定义同步函数，函数名为getEmployees()
    async function getEmployees() {
        //执行查询
        const Empl1 = await Employee.find();
        console.log(`get ${Empl1}`);//输出查询结果
    }
    
    //调用数据库连接
    connectDb();
    //调用集合的查询函数
    getEmployees();
    
```

​    

3. 新建 s_insert_employees.js 

```javascript

   const connectDb = require("./dbConnection");
   const Employee = require("./models/employeesModel");
   
   async function insertEmployees() {
       connectDb();	// 连接数据库
       try {
   	// 新增有几种方法，这是其一，实例化新的Employee对象newEmpl，并按照schema校验补充name与job数据
       const newEmpl = new Employee({'name':'aabb',"job":"eater"})
       //新的newEmpl实例化的对象 save() 完成新增操作
       await newEmpl.save();
       console.log("access insert")        
   
       }
       catch (err){              
               console.log(err);
               process.exit(0);       
               
       }
       
   }
   
   //执行insert方法调用
   insertEmployees();
   
```

   

4. 新建 s_update_employees.js

```javascript
   const connectDb = require("./dbConnection");
   const Employee = require("./models/employeesModel");
   
   async function updateEmployees() {
     
       try{
           await Employee.updateOne(
           {"name":"alisha runuo"},
           {"job":"aaa"}
       ); 
       }
       catch(err){
           console.log(err);
       }   
   
   }
   
   connectDb();
   updateEmployees();
   
```

   

5. 新建 s_delete_employees.js

```javascript

const connectDb = require("./dbConnection");
const Employee = require("./models/employeesModel");

async function deleteEmployees() {
    
    try{

     await  Employee.deleteOne({"name":"aaabbcc"});
        console.log('delete ok ');
    }
catch(err){
    console.log(err);
    process.exit(0);
}
   
}

connectDb();

deleteEmployees();

```





## 复杂版

### 使用自己的数据库集合进行测试mongoose和schema

1. models文件夹新建 a_ApplicationDetailsModel.js

```javascript

const { Date } = require("mongoose");
const mongoose = require("mongoose");
const { ObjectId } = require("mongodb");
const ApplicationDetailSchema = mongoose.Schema(
    {
        _id: {
            type: ObjectId,
        },
        id: {
            type: Number,
        },
        code: {
            type: String,
        },
        brand: {
            type: String,
        },
        model: {
            type: String,
        },
        price: {
            type: String,
        },
        count: {
            type: Number,
        },
        parm: {
            CPU: String,
            RAM: String,
            DISK: String,
            SCREEN: String,
        },
        applicationForm_Id: {
            type: ObjectId,
            ref: 'a_ApplicationForm'
        }
    });


module.exports = mongoose.model("a_ApplicationForm", ApplicationDetailSchema, "a_ApplicationForm");

```

2. models文件夹下新建 a_ApplicationFormModel.js

```javascript

const { ObjectId } = require("mongodb");
const { Date } = require("mongoose");
const mongoose = require("mongoose");
const ApplicationFormSchema = mongoose.Schema(
    {
        _id: {
            type: ObjectId,
        },
        bpm_name: {
            type: String,
            required: [true, "Please add the bpm_name"],
        },
        company: {
            type: String,
            required: [true, "Please add the company name "],
        },
        description: {
            type: String,
        },
        date: {
            type: Date, default: Date.now(),
        },
        status: {
            type: Number,default:0
        },
        user_id: {
            type: Number,
        },
        create_time: {
            type: Date, default: Date.now(),
        },
        update_time: {
            type: Date,
        },
        deleted: {
            type: Number,default:0
        }
    });

module.exports = mongoose.model("a_ApplicationForm", ApplicationFormSchema, "a_ApplicationForm");


```

3. 新建 z_a_find_AppicationDetails.js 用于查询 a_AppicationDetails 集合并显示数据

```javascript

const connectDb = require("./dbConnection");
const ApplicationDetail = require("./models/a_ApplicationDetailsModel");

async function getApplicationDetails() {
    const Details = await ApplicationDetail.find();

    console.log(`get ${Details}`);
    process.exit(0);
}

connectDb();
getApplicationDetails();


```



4. 新建 z_a_insert_AppicationDetails.js 用于新增一条document

```javascript

const connectDb = require("./dbConnection");
const ApplicationDetail = require("./models/a_ApplicationDetailsModel");

async function insertApplicationDetail() {

    connectDb();
    try {

        const newDetail = new ApplicationDetail({
            "id": 21,
            "code": "ThinkBook13.3",
            "brand": "Lenovo",
            "model": "ThinkBook13.3",
            "price": "4600.00",
            "count": 80,
            "parm": {
                "CPU": "I3-12600",
                "RAM": "16G",
                "DISK": "ST_SSD_128gb",
                "SCREEN": "13.3"
            },
            "applicationForm_Id": "65ca7197e5ede3d67a4a0c41"
        })
        await newDetail.save();
        console.log("access insert")
    }
    catch (err) {

        console.log(err);
        process.exit(0);
    }
}


insertApplicationDetail();


```



5. 新建 z_a_update_AppicationDetails.js 用于更新一条document

```javascript

const connectDb = require("./dbConnection");
const ApplicationDetail = require("./models/a_ApplicationDetailsModel");

async function updateApplicationDetail() {

    try {
        await ApplicationDetail.updateOne(
            { "id": 18 },
            {
                "count": 15,
                "brand": "Lenovo - thinkpad"                
            }
        );
    }
    catch (err) {
        console.log(err);
    }


}

connectDb();
updateApplicationDetail();



```



6. 新建 z_a_delete_AppicationDetails.js 用于删除一个document

```javascript

const connectDb = require("./dbConnection");
const ApplicationDetail = require("./models/a_ApplicationDetailsModel");

async function deleteApplicationDetail() {

    try {

        await ApplicationDetail.deleteOne({ "id": 18 });
        console.log('delete ok ');
        
    }
    catch (err) {
        console.log(err);
        process.exit(0);
    }

}

connectDb();

deleteApplicationDetail();


```

