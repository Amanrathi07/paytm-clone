interface props {
    label? : string ;
    type? : string ;
    className? : string ;
    placeholder? :any
}


export default function Input({ label, type = "text", className = "",placeholder, ...rest }:props) {
  return (
    <div className="flex flex-col gap-1">
      {label && <label className="text-sm text-slate-200">{label}</label>}

      <input
        type={type} placeholder={placeholder}
        className={
          "p-3 rounded-lg bg-white/20 border border-white/20 text-white placeholder-slate-300 focus:ring-2 focus:ring-blue-400 outline-none " +
          className
        }
        {...rest}
      />
    </div>
  );
}
