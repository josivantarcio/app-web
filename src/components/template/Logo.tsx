import { IconHomeEco } from "@tabler/icons-react";
import Link from "next/link";

export default function Logo(){
    return (
      <Link href="/">
        <div className="flex flex-col items-center">
            <IconHomeEco size={40} stroke={1} className=""></IconHomeEco>
        </div>
      </Link>
    )
}