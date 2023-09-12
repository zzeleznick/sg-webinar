"use client";

import Button, { SafeButton } from "./Button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"

interface AvatarCardProps {
    name?: string;
    title?: string;
    content?: string;
    footer?: string;
    buttonContent?: string;
    unsafe?: boolean;
}

const _default_content = `Lorem ipsum dolor sit amet, consectetur adipiscing elit.`

export default function AvatarCard(props: AvatarCardProps) {
    const { 
        name = 'Anon',
        title = 'Photographer',
        content = _default_content, 
        footer = '',
        buttonContent = 'https://semgrep.dev',
        unsafe = false,
    } = props;
    return (
        <Card className="flex flex-col items-center justify-center min-h-[200px] max-w-[200px]">
            <CardHeader className="flex grow w-full p-0">
                <div className="flex flex-row gap-2 px-6 py-6 justify-between">
                    <Avatar>
                        <AvatarImage src="https://github.com/shadcn.png" />
                        <AvatarFallback>CN</AvatarFallback>
                    </Avatar>
                    <div>
                        <CardTitle>{name}</CardTitle>
                        <CardDescription>{title}</CardDescription>
                    </div>
                </div>
            </CardHeader>
            <CardContent className="text-xs justify-start">
                <p>{content}</p>
            </CardContent>
            <CardFooter>
                <p> {
                    unsafe ? <Button title="Portfolio"/>
                    : <SafeButton title="Portfolio" content={buttonContent}/>
                    }
                </p>
            </CardFooter>
        </Card>
    )
}
