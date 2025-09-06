import type { Route } from "./+types/home";
import { Welcome } from "../welcome/welcome";
import MyButton from "~/components/MyButton";
import type Person from "~/Types/Person";
import Profile from "~/components/Person";


export function meta({}: Route.MetaArgs) {
  return [
    { title: "New React Router App" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export default function Home() {
 const person: Person = {
  name : "Musa",
  imageUrl: 
  "https://tse2.mm.bing.net/th/id/OIP.KoGtHMBlbPBp3c2FvNngWQAAAA?r=0&pid=ImgDet&w=184&h=198&c=7&dpr=1,3&o=7&rm=3",
  imageSize: 90, 
 };
 
 return (
    <div>
    <h1>Welcome to Entelect</h1>
    <MyButton/>
    <Profile person={person}/>
    </div>
    )
}
