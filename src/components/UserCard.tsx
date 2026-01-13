// export interface UserCardProps{
//    user : { name:string;
//     email:string;
//     avatarUrl?:string;
//    };
//    onClick: () => void;

// }


interface User{
    name: string;
    email: string;
    avatarUrl?:string;
}

interface UserCardProps{
    user:User;
    onClick: () => void;
}



const UserCard: React.FC<UserCardProps> = ({ user, onClick }) => {
  const { name, email, avatarUrl } = user;

  return (
    <>
    <div
      style={{
        border: '1px solid #ddd',
        borderRadius: '8px',
        padding: '16px',
        maxWidth: '320px',
        margin: '16px auto',
        boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
        backgroundColor: '#fff',
      }}
    >
      {avatarUrl ? (
        <img
          src={avatarUrl}
          alt={`${name}'s avatar`}
          style={{
            width: '80px',
            height: '80px',
            borderRadius: '50%',
            objectFit: 'cover',
            marginBottom: '12px',
          }}
        />
      ) : (
        <div
          style={{
            width: '80px',
            height: '80px',
            borderRadius: '50%',
            backgroundColor: '#e0e0e0',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            marginBottom: '12px',
            fontSize: '24px',
            color: '#666',
          }}
        >
          {name.charAt(0).toUpperCase()}
        </div>
      )}

      <h3 style={{ margin: '0 0 8px 0' }}>{name}</h3>
      <p style={{ margin: '0 0 16px 0', color: '#555' }}>{email}</p>

      <button
        onClick={onClick}
        style={{
          padding: '8px 16px',
          backgroundColor: '#007bff',
          color: 'white',
          border: 'none',
          borderRadius: '4px',
          cursor: 'pointer',
          fontSize: '14px',
        }}
      >
        View Profile
      </button>
    </div>
    </>
  );
};

export default UserCard;