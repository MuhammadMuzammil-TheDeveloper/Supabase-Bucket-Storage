console.log("Supabase", supabase)

// import { createClient } from '@supabase/supabase-js'

// Create a single supabase client for interacting with your database
const supabaseClient= supabase.createClient('https://uawrfsdhluvpbjodlmub.supabase.co', 'sb_publishable_2Bm_D5_-bV7VVVZRZE_V3g_5736aC6e')
console.log("Supabase", supabaseClient);

const fileUpload = async () =>{
    const fileData = document.getElementById("fileData")
    console.log(fileData.files[0])
    const file = fileData.files[0];
    if(!file){
        alert(`Upload file first`);
        return 
    }
    // const avatarFile = event.target.files[0]
const { data, error } = await supabaseClient
  .storage
  .from('SMIT_FIles' )
  .upload(file.name + new Date().getMilliseconds(), file)
  if(error){
    console.log("error", error)
    return
  }
  console.log("Data", data)
  const { data: url } = supabaseClient
  .storage
  .from('SMIT_FIles' )
  .getPublicUrl(data.path)
  console.log(`url`, url)
//   document.getElementById('previewImage').src = url.getPublicUrl
document.getElementById("preview").src = url.publicUrl;
}
