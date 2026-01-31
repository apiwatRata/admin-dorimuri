import { Button } from '@heroui/react';
import { Card } from "@heroui/react";

export default function SignInPage() {
    return (
        <div className="flex min-h-screen items-center justify-center dark:bg-black">
            <Card>
                <Card.Header>
                    <Card.Title >
                        Sign In
                    </Card.Title>
                </Card.Header>
                <Card.Content>
                    <Button>
                        My Button
                    </Button>
                </Card.Content>
                <Card.Footer />
            </Card>
        </div>
    )
}