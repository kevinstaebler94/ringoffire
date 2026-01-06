@echo off
git add .
if "%*"=="" (
    git commit -m "update"
) else (
    git commit -m "%*"
)
git push
pause
