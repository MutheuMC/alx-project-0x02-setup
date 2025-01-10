 export interface CardProps{
    title:string,
    content:string
}
export interface PostalModalProps{
    isOpen : boolean;
    onClose: ()=> void;
    onSave: (post: {title:string, content:string})=> void
}

export interface ButtonProps{
    size?: 'small' | 'medium' | 'large';
    shape ? : 'rounded-sm' | 'rounded-md' | 'rounded-full';
    label:string;
    onClick?: ()=> void;
}

export interface UserProps {
    name:string;
    email:string;
    address:string;

}
export interface PostProps{
    title:string;
    content:string;
    userId:number;

}
export interface PostData{
    title:string;
    body:string;
    id:number;

}

export interface UserData {
    id: number;
    name: string;
    email: string;
    address: {
      street: string;
      city: string;
      zipcode: string;
    };
}