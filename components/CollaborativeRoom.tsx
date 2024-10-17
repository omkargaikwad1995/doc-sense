import { ClientSideSuspense, RoomProvider } from '@liveblocks/react'
import React from 'react'
import Header from './Header'
import { SignedIn, SignedOut, SignInButton, UserButton } from '@clerk/nextjs'
import { Editor } from './editor/Editor'

const CollaborativeRoom = () => {
    return (
        <div>
            <RoomProvider id="my-room">
                <ClientSideSuspense fallback={<div>Loading…</div>}>
                    <div className='collaborative-room'>
                        <Header>
                            <div className='flex w-fit items-center justify-center gap-2'>
                                <p className='document-title'>Share</p>
                            </div>
                            <SignedOut>
                                <SignInButton />
                            </SignedOut>
                            <SignedIn>
                                <UserButton />
                            </SignedIn>
                        </Header>
                        <Editor />
                    </div>
                </ClientSideSuspense>
            </RoomProvider>
        </div>
    )
}

export default CollaborativeRoom
