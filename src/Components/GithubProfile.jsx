import React, { useEffect, useState } from "react";


const GitHubProfile = () => {
  const [profile, setProfile] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://api.github.com/users/github-john-doe")
      .then((res) => res.json())
      .then((data) => {
        setProfile(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Erreur lors du chargement du profil :", err);
        setLoading(false);
      });
  }, []);

  if (loading) return <p className="text-center py-5">Chargement du profil...</p>;
  if (!profile) return <p className="text-center text-danger py-5">Erreur de chargement.</p>;

  return (
    <div className="container-fluid d-flex justify-content-center align-items-center py-5">
      <div className="d-flex flex-column align-items-center" style={{ maxWidth: "800px", width: "100%" }}>
        <h1>Github User</h1>
        <h2>{profile.name}</h2>
        <img src={profile.avatar_url} alt="Avatar" width={150} height={150} className="mb-3"/>
        <p>{profile.bio}</p>
        <p>Abonnés : {profile.followers}</p>
        <p>Abonnements : {profile.following}</p>
        <p>Créé le : {new Date(profile.created_at).toLocaleDateString()}</p>
        <p>Dernière modification : {new Date(profile.updated_at).toLocaleDateString()}</p>
        <p>URL repositories : <a href={profile.repos_url}>{profile.repos_url}</a></p>
      </div>
    </div>
  );
};

export default GitHubProfile;



