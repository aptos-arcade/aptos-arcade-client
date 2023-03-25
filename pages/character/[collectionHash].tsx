import React from 'react';

import Layout from '@/components/Layout';
import Character from "@/components/Character";
import {useRouter} from "next/router";

export default function CharacterPage() {

    const router = useRouter();
    const { collectionHash } = router.query;

    return (
        <Layout>
            <Character
                collectionHash={collectionHash as string}
            />
        </Layout>
    )
}
