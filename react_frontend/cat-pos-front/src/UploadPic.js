import {useState} from "react";
const UploadPic = () => {
    const placeholder = `${process.env.PUBLIC_URL}/images/uploadIcon.png`; //real path = public/images/uploadIcon.png
    const [image, setImage] = useState(placeholder);

    const displayPic = (e) => {
        const cFiles = e.target.files;
        if (cFiles.size === 0){
            setImage(placeholder);
        }
        else{
            console.log(cFiles[0]);
            setImage(URL.createObjectURL(cFiles[0]));
        }
    }

    return (  
        <div className="upload">
            <form action="">
                <label htmlFor="upload-pic">
                    {/* put the placeholder and text in a div so they are counted as 1 element for the flexbox 
                    This makes it so the image and the text can be on seperate lines without using a flexbox row break element,
                    which makes the text and image very separated. Using column flexbox direction causes the image and text 
                    to be pushed to the bottom because of the :before pseudoelement I'm using to make the label element 1:1*/}
                    <div>
                        <img src={image} alt="Your uploaded file"/>
                        <p>Upload Image Here</p>
                    </div>

                    {/* <div className="rowBreak"></div> */}
                </label>
                <input type="file" id="upload-pic" onChange={displayPic}/>
                {/* TODO: add a custom upload file button so that it takes up the same amount of space as the pciture will */}
            </form>
        </div>
    );
}
 
export default UploadPic;