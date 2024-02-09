let SessionLoad = 1
let s:so_save = &g:so | let s:siso_save = &g:siso | setg so=0 siso=0 | setl so=-1 siso=-1
let v:this_session=expand("<sfile>:p")
silent only
silent tabonly
cd ~/svelteKit/card-workout
if expand('%') == '' && !&modified && line('$') <= 1 && getline(1) == ''
  let s:wipebuf = bufnr('%')
endif
set shortmess=aoO
argglobal
%argdel
$argadd ~/svelteKit/card-workout
edit src/lib/components/workouts/SuitExerciseWidget.svelte
let s:save_splitbelow = &splitbelow
let s:save_splitright = &splitright
set splitbelow splitright
wincmd _ | wincmd |
vsplit
1wincmd h
wincmd w
let &splitbelow = s:save_splitbelow
let &splitright = s:save_splitright
wincmd t
let s:save_winminheight = &winminheight
let s:save_winminwidth = &winminwidth
set winminheight=0
set winheight=1
set winminwidth=0
set winwidth=1
exe 'vert 1resize ' . ((&columns * 60 + 61) / 122)
exe 'vert 2resize ' . ((&columns * 61 + 61) / 122)
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
let &fdl = &fdl
let s:l = 36 - ((35 * winheight(0) + 22) / 45)
if s:l < 1 | let s:l = 1 | endif
keepjumps exe s:l
normal! zt
keepjumps 36
normal! 016|
lcd ~/svelteKit/card-workout
wincmd w
argglobal
if bufexists("~/svelteKit/card-workout/src/lib/components/workouts/SuitExerciseSelect.svelte") | buffer ~/svelteKit/card-workout/src/lib/components/workouts/SuitExerciseSelect.svelte | else | edit ~/svelteKit/card-workout/src/lib/components/workouts/SuitExerciseSelect.svelte | endif
if &buftype ==# 'terminal'
  silent file ~/svelteKit/card-workout/src/lib/components/workouts/SuitExerciseSelect.svelte
endif
setlocal fdm=manual
setlocal fde=0
setlocal fmr={{{,}}}
setlocal fdi=#
setlocal fdl=0
setlocal fml=1
setlocal fdn=20
setlocal fen
silent! normal! zE
let &fdl = &fdl
let s:l = 18 - ((17 * winheight(0) + 22) / 45)
if s:l < 1 | let s:l = 1 | endif
keepjumps exe s:l
normal! zt
keepjumps 18
normal! 016|
lcd ~/svelteKit/card-workout
wincmd w
2wincmd w
exe 'vert 1resize ' . ((&columns * 60 + 61) / 122)
exe 'vert 2resize ' . ((&columns * 61 + 61) / 122)
tabnext 1
badd +1 ~/svelteKit/card-workout/src/lib/exercises.ts
badd +1 ~/svelteKit/card-workout/src/lib/exercises.json
badd +66 ~/svelteKit/card-workout/src/store.ts
badd +7 ~/svelteKit/card-workout/src/functions/createDeckOfCards.ts
badd +1 ~/svelteKit/card-workout/src/types/suitColors.ts
badd +4 ~/svelteKit/card-workout/src/types/playingCard.ts
badd +5 ~/svelteKit/card-workout/src/types/suitExercise.ts
badd +12 ~/svelteKit/card-workout/src/routes/workouts/+page.svelte
badd +36 ~/svelteKit/card-workout/src/lib/components/workouts/SuitExerciseWidget.svelte
badd +19 ~/svelteKit/card-workout/src/lib/components/workouts/SuitExerciseSelect.svelte
badd +8 ~/svelteKit/card-workout/src/lib/components/workouts/WorkoutSelect.svelte
badd +10 ~/svelteKit/card-workout/src/lib/components/SuitInfoBox.svelte
badd +15 ~/svelteKit/card-workout/src/lib/components/SuitInfoWidget.svelte
badd +22 ~/svelteKit/card-workout/src/enums/exercises.ts
if exists('s:wipebuf') && len(win_findbuf(s:wipebuf)) == 0 && getbufvar(s:wipebuf, '&buftype') isnot# 'terminal'
  silent exe 'bwipe ' . s:wipebuf
endif
unlet! s:wipebuf
set winheight=1 winwidth=20 shortmess=filnxtToOFA
let &winminheight = s:save_winminheight
let &winminwidth = s:save_winminwidth
let s:sx = expand("<sfile>:p:r")."x.vim"
if filereadable(s:sx)
  exe "source " . fnameescape(s:sx)
endif
let &g:so = s:so_save | let &g:siso = s:siso_save
set hlsearch
nohlsearch
doautoall SessionLoadPost
unlet SessionLoad
" vim: set ft=vim :
