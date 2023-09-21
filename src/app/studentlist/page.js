import Link from "next/link";
import style from "@/style/style.module.css";
function StudentList(){
    return (
        <div>
            <h1 className={style.main}>Hello</h1>
            {/* <ul>
                <li>
                    <Link href="/studentlist/1">Anil</Link>
                </li>
                <li>
                    <Link href="/studentlist/2">Shani</Link>
                </li>
                <li>
                    <Link href="/studentlist/3">Rishabh</Link>
                </li>
            </ul> */}
        </div>
    )
}

export default StudentList;