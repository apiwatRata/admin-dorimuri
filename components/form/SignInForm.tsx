'use client';

import { Button, Card, Form, Label, Input, Separator } from '@heroui/react';
import {Icon} from "@iconify/react";
import { signInWithGoogle } from "@/libs/firebase/auth";
import { createSession } from "@/actions/auth-actions";

export default function SignInForm() {
    const handleSignIn = async () => {
        const userUid = await signInWithGoogle();
        if (userUid) {
            await createSession(userUid);
        }
    };

    return (
        <Card>
            <Card.Header>
                <Card.Title >
                </Card.Title>
            </Card.Header>
            <Card.Content>
                <Form>
                    <div className="flex w-80 flex-col gap-4">
                        <div className="flex flex-col gap-1">
                            <Label className="text-sm font-medium font-bold">Email</Label>
                            <Input className="rounded-full border-border/60" placeholder="Enter your email" />
                        </div>
                        <div className="flex flex-col gap-1">
                            <Label htmlFor="input-type-password" className="text-sm font-medium font-bold">Password</Label>
                            <Input id="input-type-password" placeholder="••••••••" type="password" />
                        </div>
                        <div className="flex flex-col gap-1">
                            <Button type="submit" className="w-full">
                                Sign In
                            </Button>
                        </div>
                        <Separator className="my-4"/>
                        <div className="flex flex-col gap-1">
                            <Button onClick={handleSignIn} className="w-full" variant="tertiary">
                                <Icon icon="devicon:google" />
                                Sign in with Google
                            </Button>
                        </div>
                    </div>

                </Form>
            </Card.Content>
            <Card.Footer />
        </Card>
    )
}