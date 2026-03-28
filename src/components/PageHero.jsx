import { Link } from 'react-router-dom'

export default function PageHero({ kicker, title, lead, breadcrumbs }) {
  return (
    <section className="page-hero">
      <div className="w">
        <div className="breadcrumb">
          {breadcrumbs.map((crumb, i) => (
            <span key={i} style={{ display: 'contents' }}>
              {i > 0 && <span>/</span>}
              {crumb.to ? <Link to={crumb.to}>{crumb.label}</Link> : <span>{crumb.label}</span>}
            </span>
          ))}
        </div>
        <div className="page-kicker">{kicker}</div>
        <h1 className="page-title" dangerouslySetInnerHTML={{ __html: title }} />
        <p className="page-lead">{lead}</p>
      </div>
    </section>
  )
}
