import { Image } from "expo-image"
import { Stack } from 'expo-router';
import React from "react";

import { Container } from '~/components/Container';

export default function Home() {
  return (
    <>
      <Stack.Screen options={{ title: 'Home' }} />
      <Container>
        <Image
          source="https://images.unsplash.com/photo-1719937050601-969f4f25d060?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          className="h-full w-full"
        />
        <Image
          source="https://images.unsplash.com/photo-1719937050601-969f4f25d060?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          style={{ width: '10%', height: '10%' }}
        />
      </Container>
    </>
  );
}
