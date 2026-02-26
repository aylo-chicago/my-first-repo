export function TopNav() {
  return (
    <header
      style={{
        borderBottom: '1px solid #dce5ef',
        background: 'white',
        padding: '0.75rem 1rem',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between'
      }}
    >
      <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
        <div
          aria-hidden
          style={{ width: 14, height: 14, borderRadius: 2, background: '#ef464b', transform: 'rotate(45deg)' }}
        />
        <strong style={{ color: '#1a4c81' }}>Transcend Blueprint Builder</strong>
      </div>
      <small style={{ color: '#5d6d7e' }}>Prototype v1</small>
    </header>
  );
}
