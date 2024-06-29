import { franc } from "franc";
import langs from "langs";
import colors from "colors";

const input = process.argv[2];

const langCode = franc(input);
if (!langCode || langCode === "und") {
  const errText = "sorry, try again with some more credentials";
  console.log(errText.red);
} else {
  const language = langs.where("3", langCode);
  if(language){
    console.log(language.name.blue);   
  }else{
    const errText = "sorry, try again with some more credentials";
  console.log(errText.red);
  }
  
}
