import React, {FormEvent} from 'react'


type Props = {
savePost: (e: React.FormEvent, formData: IPost) => void
}

const AddPost: React.FC<Props> = ({savePost}) =>{

  const [formData, setFormData] = React.useState<IPost>()
  const handleForm = (e: FormEvent<HTMLInputElement>): void => {
e.preventDefault();
const target = e?.currentTarget;
  setFormData((prevState)=>({
...prevState, [target.id]: target.value } as IPost))

    };


  return(

    <form className='Form' onSubmit={(e) => savePost(e, formData as IPost)}>
      <div>
        <div className='Form--field'>
          <label htmlFor='name'>Title</label>
          <input onChange={handleForm} type='text' id='title'  minLength={3} required/>
        </div>
        <div className='Form--field'>
          <label htmlFor='body'>Description</label>
          <input onChange={handleForm} type='text' id='body' minLength={10} required/>
        </div>
      </div>
      <button
        className='Form__button'
        disabled={formData === undefined ? true : false}
      >
        Add Post
      </button>
    </form>
  )
  }
export default AddPost