import {useState} from "react";
const UploadPic = () => {
    const placeholder = `${process.env.PUBLIC_URL}/images/uploadIcon.png`; //real path = public/images/uploadIcon.png
    const [image, setImage] = useState(placeholder);
    const [uploadFlag, setUpFlag] = useState(false);
    const [ifCat, setIfCat] = useState(false);

    const checkIfCat = (imgFile) => {
        console.log("gotta make this part of the pipeline :)");
        return true;
    }
    const callCatEngine = (img) => {

    }
    const handleUpload = (e) => {
        const cFiles = e.target.files;
        if(cFiles.size !== 0){
            displayPic(cFiles[0]); //sends most recent file to be displayed by the function
            setUpFlag(true);
            setIfCat(checkIfCat(cFiles[0])); //sends most recently uploaded file to be checked if its a cat
        }
        // e.target.submit();
    }
    const displayPic = (imgFile) => {
        // console.log(cFiles[0]); 
        setImage(URL.createObjectURL(imgFile));
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
                        {!uploadFlag && (<p>Upload Image Here</p>)}
                        {uploadFlag && (<p>Click Here to Upload a Different Image</p>)}
                    </div>

                    {/* <div className="rowBreak"></div> */}
                </label>
                <input type="file" id="upload-pic" onChange={handleUpload}/>
                {/* TODO: add a custom upload file button so that it takes up the same amount of space as the pciture will */}
            </form>
            <form action="">
                {uploadFlag && <button>Find Cat Position</button>}
            </form>
        </div>
    );
}
 
export default UploadPic;