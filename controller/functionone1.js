const {Course}=require('../model/coursemodel');
const User=require('../model/Usermodel')
const functionone=async (req,res)=>{
    // try {
    //     // Extract the path of the uploaded video file
    //     const videoFilePath = req.file.path;
    //     console.log(videoFilePath);

    //     // Create a new Course object based on the request body
    //     const newCourse = new Course({
    //         c_name: req.body.c_name,
    //         c_id: req.body.c_id,
    //         modules: req.body.modules.map(module => ({
    //             ...module,
    //             content: module.content.map(contentItem => ({
    //                 ...contentItem,
    //                 video_link: videoFilePath // Use the path of the uploaded video file
    //             }))
    //         }))
    //     });

    //     // Save the newCourse object to the database
    //     const savedCourse = await newCourse.save();

    //     // Respond with a success message
    //     res.status(201).json("Successful");
    // } catch (error) {
    //     // If an error occurs, respond with an error status and message
    //     res.status(400).json({ message: error.message });
    // }
    // res.json("successful");
    try {
        // Create a new Course object based on the request body
        const newCourse = new Course(req.body);
        
        // Save the newCourse object to the database
        const savedCourse = await newCourse.save();
        
        // Respond with the savedCourse object
        res.status(201).json(savedCourse);
    } catch (error) {
        // If an error occurs, respond with an error status and message
        res.status(400).json({ message: error.message });
    }
}
module.exports ={functionone};