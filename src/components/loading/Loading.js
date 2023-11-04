

function Loading() {
  return (
    <div className="flex justify-center mt-40 text-3xl text-yellow-50 font-medium">
         <button type="button" className=" bg-yellow-600 " disabled>
  <svg className="animate-spin h-5 w-5 mr-3 ..." viewBox="0 0 24 24"></svg>
  Cargando...
</button>  
    </div>
 
  )
}

export default Loading