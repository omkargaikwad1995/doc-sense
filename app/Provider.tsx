'use client';

import React, { use } from 'react'
import { ClientSideSuspense, LiveblocksProvider, RoomProvider } from '@liveblocks/react'

const Provider = ({ children }: { children: React.ReactNode }) => {
    return (
        <div>
            <LiveblocksProvider authEndpoint="/api/livebocks-auth">

            </LiveblocksProvider>
        </div>
    )
}

export default Provider
