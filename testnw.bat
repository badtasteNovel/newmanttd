@echo off
:: Check if the file name is provided as an argument
IF "%1"=="" (
    echo No file name provided. Usage: newman-run.bat fileName
    exit /b
)

:: Use the first argument (%1) as the file name
SET fileName=%1

:: Run the Newman command with error handling
newman run "./collection/%fileName%.json" -g "./global/workspace.postman_globals.json" -e "./environment/1shop.postman_environment.json" -d "./resource/%fileName%.json" -n "10"  && (
    :: Pause the script so the user can see the output
    pause
)
