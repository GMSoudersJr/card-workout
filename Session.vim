let SessionLoad = 1
let s:so_save = &so | let s:siso_save = &siso | set so=0 siso=0
let v:this_session=expand("<sfile>:p")
silent only
cd ~/svelte_projects/card-workout
if expand('%') == '' && !&modified && line('$') <= 1 && getline(1) == ''
  let s:wipebuf = bufnr('%')
endif
set shortmess=aoO
badd +76 src/store.ts
badd +8 src/routes/cards/+layout.svelte
badd +30 src/lib/components/CardsInfoWidget.svelte
badd +17 src/lib/components/DeckInfoWidget.svelte
badd +120 src/lib/components/PlayingCardWidget.svelte
badd +20 src/routes/cards/+page.svelte
badd +25 src/classes/playingCard.ts
badd +29 src/lib/components/ShuffleButton.svelte
badd +3 src/types/playingCard.ts
badd +17 src/lib/components/StartButton.svelte
badd +33 src/enums/exercises.ts
badd +3 src/types/reps.ts
badd +1 src/types/exercises.ts
badd +2 src/enums/workouts.ts
badd +3 src/types/workout.ts
badd +3 src/types/exerciseCard.ts
argglobal
%argdel
$argadd ./
edit src/lib/components/PlayingCardWidget.svelte
set splitbelow splitright
set nosplitbelow
set nosplitright
wincmd t
set winminheight=0
set winheight=1
set winminwidth=0
set winwidth=1
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
let s:l = 121 - ((35 * winheight(0) + 26) / 53)
if s:l < 1 | let s:l = 1 | endif
exe s:l
normal! zt
121
normal! 05|
lcd ~/svelte_projects/card-workout
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
