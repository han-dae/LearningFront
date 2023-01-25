const multer = require("multer");
var fs = require("fs");

const fileStorageEngine = multer.diskStorage({
    destination: (req, file, cb) => {
        if(file.fieldname == "images") {
            let id = req.body.id;
            let prj_code = req.body.prj_code;

            var dir = 
            "C:/Desktop/product/" + id +"/" + prj_code + "/"; //local

            // 폴더 없으면 폴더 생성
            if (!fs.existsSync(dir)) {
                fs.mkdirSync(dir, {recursive: true});
            }

            cb(null, dir);

        } else {
            cb(null, "C:/Desktop/product/" + file.fieldname); // local
        }

    },
    filename : function (req, file, cb){
        if (file.fieldname == "images"){
            cb(null, file.originalname);
        } else {
            let id = JSON.parse(req.body.inputData).id;
            let locat = JSON.parse(req.body.inputData).locat;
            let idx = JSON.parse(req.body.inputData).idx;
            let code = JSON.parse(req.body.inputData).code;
        
            cb(
                null,
                facil_name +
                  "_" +
                  id +
                  "_" +
                  locat +
                  "_" +
                  idx +
                  "_" +
                  file.originalname
            );    
        }
    },
});

const limits = {
    fieldNameSize: 200, //필드명 사이즈 최대값
    filedSize: 1024 * 1024, // 필드 사이즈 값 설정 (기본값 1MB)
    fields: 2, // 파일 형식이 아닌 필드의 최대 개수 (기본 값 무제한)
    fileSize: 16777216, //multipart 형식 폼에서 최대 파일 사이즈(bytes) "16MB 설정" (기본 값 무제한)
    files: 10, //multipart 형식 폼에서 파일 필드 최대 개수 (기본 값 무제한)
  };

  const fileFilter = (req, file, callback) => {
    const typeArray = file.mimetype.split("/");
    const fileType = typeArray[1];
  
    if (fileType == "jpg" || fileType == "jpeg" || fileType == "png") {
      callback(null, true);
    } else {
      return callback(null, false);
    }
  };

  const upload = multer({
    storage: fileStorageEngine,  //이미지 업로드
    limits: limits,     //업로드 제한
    fileFilter: fileFilter,   //파일 제한
  }); 
  
  app.post(routes.uploadFile, upload.array("images"), Facilitys_ManagementRouter);

  if (fileList2.length) {
    const formData = new FormData();
    formData.append("inputData", JSON.stringify(inputData));   //inputData 에 다른데이터 담아서

    fileList2?.forEach((file) => {
      formData.append("image", file);     //필드명 백단과 맞춰야함
    });

    await axios
      .post("http://host:port/api/FileImg", formData) //api 설정 후 formData 보내기
      .then((res) => {
        if (res.status === 200) {
          const resultData = res.data;
        } else if (res.status !== 200) {
          return message.error("등록 실패! 관리자에게 문의해주세요!");
        }
      })
      .catch((err) => console.error(err));
  }