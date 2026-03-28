import { useState } from 'react'

export default function DoctorAvatar({ initials, alt, src, className, style }) {
  const [hasError, setHasError] = useState(false)
  const showPhoto = Boolean(src) && !hasError
  const avatarClassName = [className, showPhoto ? 'has-photo' : ''].filter(Boolean).join(' ')

  return (
    <div className={avatarClassName} style={style} aria-label={alt}>
      {showPhoto ? (
        <img
          src={src}
          alt={alt}
          className="avatar-photo"
          loading="lazy"
          decoding="async"
          onError={() => setHasError(true)}
        />
      ) : (
        <span>{initials}</span>
      )}
    </div>
  )
}