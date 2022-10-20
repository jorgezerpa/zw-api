import multer from 'multer'

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, 'uploads/')
    },
    filename: (req, file, cb) => {
      const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
      const name = 'image-'+ uniqueSuffix + getMimeType(file.mimetype)
      req.imagePath = name; 
      cb(null, name)
    },
    
  })

  
  export const upload = multer({ storage: storage, fileFilter:fileFilter })
  
  //this function should be exported to another file to be reusable
  function getMimeType(dirtMime:string){
      if(dirtMime.includes('jpeg')) return '.jpeg'
      if(dirtMime.includes('jpg')) return '.jpg'
      if(dirtMime.includes('png')) return '.png'
      return 'notAllowed'
  }

  function fileFilter (req:any, file:any, cb:any) {
    if(getMimeType(file.mimetype)==='notAllowed'){
      cb(null, false)
      return
    } 
    cb(null, true)
    // // You can always pass an error if something goes wrong:
    // cb(new Error('I don\'t have a clue!'))
  }