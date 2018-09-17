@echo off 
setLocal EnableExtensions EnableDelayedExpansion
set src=/static
set var=resources/static
Set infile=frontend/build/index.html
<"%infile%" >"TMP.TXT" (
 for /f %%a in ('find /c /v "" ^< "%infile%"') do for /L %%c in (1,1,%%a) do (
    set LINE=& set /p LINE=
    if defined LINE (echo !LINE:%src%=%var%!) else echo.
 )
)
move TMP.TXT "%infile%"