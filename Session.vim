let SessionLoad = 1
let s:so_save = &so | let s:siso_save = &siso | set so=0 siso=0
let v:this_session=expand("<sfile>:p")
silent only
cd ~/svelte_projects/card-workout
if expand('%') == '' && !&modified && line('$') <= 1 && getline(1) == ''
  let s:wipebuf = bufnr('%')
endif
set shortmess=aoO
badd +23 src/routes/cards/+layout.svelte
badd +2 tests/cardFlow.test.ts
badd +18 src/lib/components/cards/PlayingCardWidget.svelte
badd +21 src/lib/components/cards/DeckInfoWidget.svelte
badd +79 src/routes/cards/+page.svelte
badd +13 src/lib/components/cards/StartButton.svelte
badd +9 src/types/playingCard.ts
badd +42 tests/clickingAllCards.test.ts
badd +1 src/lib/components/cards/NopeNotNowButton.svelte
badd +21 src/classes/playingCard.ts
badd +121 src/store.ts
badd +28 src/functions/createDeckOfCards.ts
badd +9 src/functions/createPlayingCard.ts
badd +8 src/lib/components/cards/MiniCardTicks.svelte
badd +1 src/\*\*/tests
badd +21 tests/nopeNotNowButton.ts
badd +11 src/lib/components/cards/PluckedTheSameCard.svelte
argglobal
%argdel
$argadd .
edit src/lib/components/cards/NopeNotNowButton.svelte
set splitbelow splitright
wincmd _ | wincmd |
vsplit
wincmd _ | wincmd |
vsplit
2wincmd h
wincmd w
wincmd w
set nosplitbelow
set nosplitright
wincmd t
set winminheight=0
set winheight=1
set winminwidth=0
set winwidth=1
exe 'vert 1resize ' . ((&columns * 94 + 141) / 282)
exe 'vert 2resize ' . ((&columns * 93 + 141) / 282)
exe 'vert 3resize ' . ((&columns * 93 + 141) / 282)
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
let s:l = 24 - ((23 * winheight(0) + 32) / 64)
if s:l < 1 | let s:l = 1 | endif
exe s:l
normal! zt
24
normal! 023|
lcd ~/svelte_projects/card-workout
wincmd w
argglobal
if bufexists("~/svelte_projects/card-workout/src/lib/components/cards/PluckedTheSameCard.svelte") | buffer ~/svelte_projects/card-workout/src/lib/components/cards/PluckedTheSameCard.svelte | else | edit ~/svelte_projects/card-workout/src/lib/components/cards/PluckedTheSameCard.svelte | endif
setlocal fdm=manual
setlocal fde=0
setlocal fmr={{{,}}}
setlocal fdi=#
setlocal fdl=0
setlocal fml=1
setlocal fdn=20
setlocal fen
silent! normal! zE
let s:l = 12 - ((11 * winheight(0) + 32) / 64)
if s:l < 1 | let s:l = 1 | endif
exe s:l
normal! zt
12
normal! 03|
lcd ~/svelte_projects/card-workout
wincmd w
argglobal
if bufexists("~/svelte_projects/card-workout/tests/cardFlow.test.ts") | buffer ~/svelte_projects/card-workout/tests/cardFlow.test.ts | else | edit ~/svelte_projects/card-workout/tests/cardFlow.test.ts | endif
setlocal fdm=manual
setlocal fde=0
setlocal fmr={{{,}}}
setlocal fdi=#
setlocal fdl=0
setlocal fml=1
setlocal fdn=20
setlocal fen
silent! normal! zE
let s:l = 10 - ((9 * winheight(0) + 32) / 64)
if s:l < 1 | let s:l = 1 | endif
exe s:l
normal! zt
10
normal! 0
lcd ~/svelte_projects/card-workout
wincmd w
exe 'vert 1resize ' . ((&columns * 94 + 141) / 282)
exe 'vert 2resize ' . ((&columns * 93 + 141) / 282)
exe 'vert 3resize ' . ((&columns * 93 + 141) / 282)
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
