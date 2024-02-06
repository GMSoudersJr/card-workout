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
badd +99 src/lib/components/PlayingCardWidget.svelte
badd +45 src/routes/cards/+page.svelte
badd +25 src/classes/playingCard.ts
badd +29 src/lib/components/ShuffleButton.svelte
badd +7 src/types/playingCard.ts
badd +16 src/lib/components/StartButton.svelte
badd +33 src/enums/exercises.ts
badd +3 src/types/reps.ts
badd +1 src/types/exercises.ts
badd +2 src/enums/workouts.ts
badd +3 src/types/workout.ts
badd +3 src/types/exerciseCard.ts
badd +1 src/routes/+page.svelte
badd +22 src/lib/components/SuitInfoBox.svelte
badd +0 src/lib/components/RankInfoBox.svelte
argglobal
%argdel
$argadd ./
edit src/lib/components/SuitInfoBox.svelte
set splitbelow splitright
wincmd _ | wincmd |
split
1wincmd k
wincmd w
set nosplitbelow
set nosplitright
wincmd t
set winminheight=0
set winheight=1
set winminwidth=0
set winwidth=1
exe '1resize ' . ((&lines * 26 + 27) / 55)
exe '2resize ' . ((&lines * 26 + 27) / 55)
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
let s:l = 40 - ((20 * winheight(0) + 13) / 26)
if s:l < 1 | let s:l = 1 | endif
exe s:l
normal! zt
40
normal! 022|
lcd ~/svelte_projects/card-workout
wincmd w
argglobal
if bufexists("~/svelte_projects/card-workout/src/lib/components/RankInfoBox.svelte") | buffer ~/svelte_projects/card-workout/src/lib/components/RankInfoBox.svelte | else | edit ~/svelte_projects/card-workout/src/lib/components/RankInfoBox.svelte | endif
setlocal fdm=manual
setlocal fde=0
setlocal fmr={{{,}}}
setlocal fdi=#
setlocal fdl=0
setlocal fml=1
setlocal fdn=20
setlocal fen
silent! normal! zE
let s:l = 38 - ((20 * winheight(0) + 13) / 26)
if s:l < 1 | let s:l = 1 | endif
exe s:l
normal! zt
38
normal! 0
lcd ~/svelte_projects/card-workout
wincmd w
exe '1resize ' . ((&lines * 26 + 27) / 55)
exe '2resize ' . ((&lines * 26 + 27) / 55)
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
