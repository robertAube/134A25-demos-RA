@echo off
setlocal enabledelayedexpansion

set "files="
for %%f in (*) do (
	echo %%f
rem     if defined files (
rem         set "files=!files!;%%f"
rem     ) else (
rem         set "files=%%f"
rem     )
)

echo %files%
endlocal
