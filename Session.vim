let SessionLoad = 1
let s:so_save = &so | let s:siso_save = &siso | set so=0 siso=0
let v:this_session=expand("<sfile>:p")
silent only
cd ~/svelte_projects/card-workout
if expand('%') == '' && !&modified && line('$') <= 1 && getline(1) == ''
  let s:wipebuf = bufnr('%')
endif
set shortmess=aoO
<<<<<<< HEAD
badd +0 tests/login.test.ts
badd +4 tests/cardFlow.test.ts
badd +27 tests/workoutFlow.test.ts
badd +15 tests/selectingExercises.test.ts
badd +20 tests/exercisesPage.test.ts
badd +1 tests/cardsPage.test.ts
badd +8 tests/clickingAllCards.test.ts
badd +5 tests/homePage.test.ts
badd +40 tests/saveWorkout.test.ts
badd +31 src/lib/components/exercises/SuitExerciseSelect.svelte
argglobal
%argdel
$argadd .
edit tests/workoutFlow.test.ts
=======
badd +57 tests/android.test.ts
badd +33 playwright.config.ts
badd +34 tests/cardFlow.test.ts
argglobal
%argdel
$argadd .
edit playwright.config.ts
>>>>>>> main
set splitbelow splitright
wincmd _ | wincmd |
vsplit
1wincmd h
<<<<<<< HEAD
wincmd _ | wincmd |
split
1wincmd k
wincmd w
=======
>>>>>>> main
wincmd w
set nosplitbelow
set nosplitright
wincmd t
set winminheight=0
set winheight=1
set winminwidth=0
set winwidth=1
<<<<<<< HEAD
exe '1resize ' . ((&lines * 23 + 24) / 49)
exe 'vert 1resize ' . ((&columns * 105 + 105) / 211)
exe '2resize ' . ((&lines * 23 + 24) / 49)
exe 'vert 2resize ' . ((&columns * 105 + 105) / 211)
exe 'vert 3resize ' . ((&columns * 105 + 105) / 211)
=======
exe 'vert 1resize ' . ((&columns * 115 + 115) / 230)
exe 'vert 2resize ' . ((&columns * 114 + 115) / 230)
>>>>>>> main
argglobal
setlocal fdm=manual
setlocal fde=0
setlocal fmr={{{,}}}
setlocal fdi=#
setlocal fdl=0
setlocal fml=1
setlocal fdn=20
setlocal fen
silent! normal! zE
<<<<<<< HEAD
let s:l = 30 - ((16 * winheight(0) + 11) / 23)
if s:l < 1 | let s:l = 1 | endif
exe s:l
normal! zt
30
normal! 0
lcd ~/svelte_projects/card-workout
wincmd w
argglobal
if bufexists("~/svelte_projects/card-workout/tests/saveWorkout.test.ts") | buffer ~/svelte_projects/card-workout/tests/saveWorkout.test.ts | else | edit ~/svelte_projects/card-workout/tests/saveWorkout.test.ts | endif
=======
let s:l = 37 - ((36 * winheight(0) + 29) / 58)
if s:l < 1 | let s:l = 1 | endif
exe s:l
normal! zt
37
normal! 02|
lcd ~/svelte_projects/card-workout
wincmd w
argglobal
if bufexists("~/svelte_projects/card-workout/tests/android.test.ts") | buffer ~/svelte_projects/card-workout/tests/android.test.ts | else | edit ~/svelte_projects/card-workout/tests/android.test.ts | endif
>>>>>>> main
setlocal fdm=manual
setlocal fde=0
setlocal fmr={{{,}}}
setlocal fdi=#
setlocal fdl=0
setlocal fml=1
setlocal fdn=20
setlocal fen
silent! normal! zE
<<<<<<< HEAD
let s:l = 42 - ((18 * winheight(0) + 11) / 23)
if s:l < 1 | let s:l = 1 | endif
exe s:l
normal! zt
42
normal! 0
lcd ~/svelte_projects/card-workout
wincmd w
argglobal
if bufexists("~/svelte_projects/card-workout/tests/login.test.ts") | buffer ~/svelte_projects/card-workout/tests/login.test.ts | else | edit ~/svelte_projects/card-workout/tests/login.test.ts | endif
setlocal fdm=manual
setlocal fde=0
setlocal fmr={{{,}}}
setlocal fdi=#
setlocal fdl=0
setlocal fml=1
setlocal fdn=20
setlocal fen
silent! normal! zE
let s:l = 38 - ((36 * winheight(0) + 23) / 47)
if s:l < 1 | let s:l = 1 | endif
exe s:l
normal! zt
38
normal! 0
lcd ~/svelte_projects/card-workout
wincmd w
exe '1resize ' . ((&lines * 23 + 24) / 49)
exe 'vert 1resize ' . ((&columns * 105 + 105) / 211)
exe '2resize ' . ((&lines * 23 + 24) / 49)
exe 'vert 2resize ' . ((&columns * 105 + 105) / 211)
exe 'vert 3resize ' . ((&columns * 105 + 105) / 211)
=======
let s:l = 108 - ((55 * winheight(0) + 29) / 58)
if s:l < 1 | let s:l = 1 | endif
exe s:l
normal! zt
108
normal! 03|
lcd ~/svelte_projects/card-workout
wincmd w
2wincmd w
exe 'vert 1resize ' . ((&columns * 115 + 115) / 230)
exe 'vert 2resize ' . ((&columns * 114 + 115) / 230)
>>>>>>> main
tabnext 1
if exists('s:wipebuf') && getbufvar(s:wipebuf, '&buftype') isnot# 'terminal'
  silent exe 'bwipe ' . s:wipebuf
endif
unlet! s:wipebuf
set winheight=1 winwidth=20 winminheight=1 winminwidth=1 shortmess=filnxtToOFA
let s:sx = expand("<sfile>:p:r")."x.vim"
if file_readable(s:sx)
  exe "source " . fnameescape(s:sx)
endif
let &so = s:so_save | let &siso = s:siso_save
doautoall SessionLoadPost
unlet SessionLoad
" vim: set ft=vim :
