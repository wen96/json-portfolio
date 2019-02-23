sudo -u postgres bash -c "psql -c \"CREATE USER back WITH PASSWORD 'testtest';\""
sudo -u postgres bash -c "psql -c \"ALTER USER back CREATEDB;\""
sudo -u postgres bash -c "psql -c \"CREATE DATABASE back;\""
sudo -u postgres bash -c "psql -c \"ALTER DATABASE back OWNER TO back;\""
