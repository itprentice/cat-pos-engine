import {useState} from "react";
const UploadPic = () => {
    const placeholder = `${process.env.PUBLIC_URL}/images/uploadIcon.png`; //real path = public/images/uploadIcon.png
    const [image, setImage] = useState(placeholder);
    const [uploadFlag, setUpFlag] = useState(false);
    const [ifCat, setIfCat] = useState(false);
    const [position, setPosition] = useState('');
    const [confidence, setConfidence] = useState(0);

    const checkIfCat = (imgFile) => {
        console.log("gotta make this part of the pipeline :)");
        return true;
    }
    const callCatEngine = (img) => {
        const data = new FormData();
        data.append('catImage', img);
        fetch("/upload", {
            method: 'POST',
            body: data,
        }).then((response) => {
            response.text().then((text) => {
                const textArray = text.split();
                setPosition(textArray[0]);
                setConfidence(textArray[1]);
            });
        });
    }
    const handleUpload = (e) => {
        const cFiles = e.target.files;
        if(cFiles.length > 0){
            displayPic(cFiles[0]); //sends most recent file to be displayed by the function
            setUpFlag(true);
            setIfCat(checkIfCat(cFiles[0])); //sends most recently uploaded file to be checked if its a cat
            callCatEngine(cFiles[0]);
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
                <input type="file" accept="image/*" id="upload-pic" onChange={handleUpload}/>
                
            </form>
            {/* TODO: implement ifCat part of the pipeline so you can only find the cat position if the uploaded picture is of a cat */}
            {/* <form action="">
                {uploadFlag && <button>Find Cat Position</button>}
            </form> */}
            <h2>This cat is in a {position} resting position. The model is {Math.round(confidence*10000)/10000 * 100} % confident about this.</h2>
        </div>
    );
}
 
export default UploadPic;