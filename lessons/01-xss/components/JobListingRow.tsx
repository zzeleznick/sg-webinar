import { FaShareSquare } from "react-icons/fa";
import Link from "next/link";

import {
    Card,
    CardContent,
} from "@/components/ui/card"

interface JobListingRowProps {
    company?: string;
    jobTitle?: string;
    image?: string;
    url?: string;
    tags?: string[];
}

// This component is also vulnerable to XSS, but it's not the focus of this lesson.
const SvgImage = (props: { src: string }) => (
    <div
        className={"svg-icon w-16 h-16"}
        dangerouslySetInnerHTML={{ __html: props.src }}
    />
)

/*
    NOTE:
    When we run the exploit, we should expect the following warning in the console emitted as an error:
    "Warning: A future version of React will block javascript: URLs as a security precaution."
*/

export default function JobListingRow(props: JobListingRowProps) {
    return (
        <div className="flex w-full relative">
            <Card className="grow relative">
                <Link href={props.url || "/#job"}>
                <FaShareSquare 
                    className="absolute top-2 right-2 m-2 text-gray-400 hover:text-gray-600 cursor-pointer" />
                </Link>
                <CardContent className="py-2">
                    <div className="flex flex-row">
                        <div className="flex flex-row">
                            {props.image && (
                                <div className="px-6 py-6 justify-self-center cursor-pointer">
                                    <SvgImage src={props.image} />
                                </div>
                            )
                            }
                            <div className="flex flex-row gap-2 px-6 py-6 justify-between">
                                <div>
                                    <h1 className="text-2xl font-bold">{props.company}</h1>
                                    <h2 className="text-xl">{props.jobTitle}</h2>
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-row gap-2 px-6 py-6 grow justify-end">
                            {
                                props.tags && props.tags.length > 0 && (
                                    <div className="flex flex-row gap-2 items-center">
                                        {
                                            props.tags.map((tag, idx) => (
                                                <div key={idx} className="bg-gray-200 rounded-full cursor-pointer px-2 py-1">
                                                    <div className="text-sm font-semibold text-gray-700">{tag}</div>
                                                </div>
                                            ))
                                        }
                                    </div>
                                )
                            }
                        </div>
                    </div>
                </CardContent>
            </Card>
        </div>
    )
}
