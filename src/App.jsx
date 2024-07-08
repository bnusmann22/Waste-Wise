import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog"

import './App.css'

function App() {

  return (
    <>
      <AlertDialog>
  <AlertDialogTrigger className="bg-black px-5 py-1 text-white flex justify-center items-center rounded-md">Open</AlertDialogTrigger>
  <AlertDialogContent>
    <AlertDialogHeader>
      <AlertDialogTitle>Just making sure shadcn&apos;s working</AlertDialogTitle>
      <AlertDialogDescription>
        You can close it now
      </AlertDialogDescription>
    </AlertDialogHeader>
    <AlertDialogFooter>
      <AlertDialogAction>Close this shit</AlertDialogAction>
    </AlertDialogFooter>
  </AlertDialogContent>
</AlertDialog>

    </>
  )
}

export default App
