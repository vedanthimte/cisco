export default function Tabs({tabs, active, onChange}){
  return (
    <div className="tabs">
      {tabs.map(t => (
        <button key={t.value}
          className={"tab " + (active===t.value ? 'active' : '')}
          onClick={()=>onChange(t.value)}>
          {t.label}
        </button>
      ))}
    </div>
  )
}
