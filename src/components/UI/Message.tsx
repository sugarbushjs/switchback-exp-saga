import { toast } from 'react-toastify';

export function Message(message: string, type: string) {
  if(type.startsWith('@@'))
    return

  toast(message)
}




/*

position: "top-right",
  autoClose: 5000,
  hideProgressBar: false,
  closeOnClick: true,
  pauseOnHover: true,
  draggable: true,
  progress: undefined,
  theme: "dark",*/
