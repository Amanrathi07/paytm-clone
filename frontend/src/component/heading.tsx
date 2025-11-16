interface props {
    title : string ;
    subTitle : string
}


export default function Heading ({title,subTitle}:props){
    return(
        <div className="text-center mb-8">
          <h1 className="text-3xl font-semibold text-white">{title}</h1>
          <p className="text-slate-300 text-sm mt-1">{subTitle}</p>
        </div>
    )
}