import create from 'zustand'

type petType = 'dog' | 'cat' | 'horse' | 'smallPets'

type State = {
petName: string | undefined
petType: petType | undefined
formText: string | undefined

setPetName: (name: string) => void,
setPetType: (type: petType) => void,
setFormText: (text: string) => void,
  
}


const useFormStore = create<State>((set, get) => ({
  
    petName: undefined,
    petType:  undefined,
    formText:  undefined,

    setPetName: (name: string) => set((state) => ({ ...state, petName: name })),
    setPetType: (type: petType) => set((state) => ({ ...state, petType: type })),
    setFormText: (text: string) => set((state) => ({ ...state, formText: text})),
  

}))

export default useFormStore;