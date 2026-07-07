@echo off
cd /d "%~dp0"
start "" http://localhost:5200
npm run dev
