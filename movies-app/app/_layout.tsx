import { Stack } from 'expo-router'
import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'
import '../global.css'
import { GestureHandlerRootView } from 'react-native-gesture-handler'

const queryClient = new QueryClient()

const RootLayout = () => {
  return (
    <GestureHandlerRootView>
      <QueryClientProvider client={queryClient}>
        <Stack 
          screenOptions={{
            headerShown: false
          }}
        />
      </QueryClientProvider>
    </GestureHandlerRootView>
  )
}

export default RootLayout