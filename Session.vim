let SessionLoad = 1
let s:so_save = &so | let s:siso_save = &siso | set so=0 siso=0
let v:this_session=expand("<sfile>:p")
silent only
cd ~/svelte_projects/card-workout
if expand('%') == '' && !&modified && line('$') <= 1 && getline(1) == ''
  let s:wipebuf = bufnr('%')
endif
set shortmess=aoO
badd +50 src/store.ts
badd +8 src/routes/cards/+layout.svelte
badd +30 src/lib/components/CardsInfoWidget.svelte
badd +17 src/lib/components/DeckInfoWidget.svelte
badd +43 src/lib/components/PlayingCardWidget.svelte
badd +20 src/routes/cards/+page.svelte
badd +22 src/classes/playingCard.ts
badd +10 src/lib/components/ShuffleButton.svelte
badd +7 src/types/playingCard.ts
badd +0 src/lib/components/StartButton.svelte
argglobal
%argdel
$argadd ./
edit src/lib/components/StartButton.svelte
set splitbelow splitright
wincmd _ | wincmd |
vsplit
1wincmd h
wincmd _ | wincmd |
split
1wincmd k
wincmd w
wincmd w
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
exe 'vert 1resize ' . ((&columns * 115 + 115) / 230)
exe '2resize ' . ((&lines * 26 + 27) / 55)
exe 'vert 2resize ' . ((&columns * 115 + 115) / 230)
exe '3resize ' . ((&lines * 26 + 27) / 55)
exe 'vert 3resize ' . ((&columns * 114 + 115) / 230)
exe '4resize ' . ((&lines * 26 + 27) / 55)
exe 'vert 4resize ' . ((&columns * 114 + 115) / 230)
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
let s:l = 7 - ((6 * winheight(0) + 13) / 26)
if s:l < 1 | let s:l = 1 | endif
exe s:l
normal! zt
7
normal! 0
lcd ~/svelte_projects/card-workout
wincmd w
argglobal
if bufexists("~/svelte_projects/card-workout/src/lib/components/DeckInfoWidget.svelte") | buffer ~/svelte_projects/card-workout/src/lib/components/DeckInfoWidget.svelte | else | edit ~/svelte_projects/card-workout/src/lib/components/DeckInfoWidget.svelte | endif
setlocal fdm=manual
setlocal fde=0
setlocal fmr={{{,}}}
setlocal fdi=#
setlocal fdl=0
setlocal fml=1
setlocal fdn=20
setlocal fen
silent! normal! zE
let s:l = 17 - ((8 * winheight(0) + 13) / 26)
if s:l < 1 | let s:l = 1 | endif
exe s:l
normal! zt
17
normal! 03|
lcd ~/svelte_projects/card-workout
wincmd w
argglobal
if bufexists("~/svelte_projects/card-workout/src/lib/components/PlayingCardWidget.svelte") | buffer ~/svelte_projects/card-workout/src/lib/components/PlayingCardWidget.svelte | else | edit ~/svelte_projects/card-workout/src/lib/components/PlayingCardWidget.svelte | endif
setlocal fdm=manual
setlocal fde=0
setlocal fmr={{{,}}}
setlocal fdi=#
setlocal fdl=0
setlocal fml=1
setlocal fdn=20
setlocal fen
silent! normal! zE
let s:l = 47 - ((14 * winheight(0) + 13) / 26)
if s:l < 1 | let s:l = 1 | endif
exe s:l
normal! zt
47
normal! 035|
lcd ~/svelte_projects/card-workout
wincmd w
argglobal
if bufexists("~/svelte_projects/card-workout/src/store.ts") | buffer ~/svelte_projects/card-workout/src/store.ts | else | edit ~/svelte_projects/card-workout/src/store.ts | endif
setlocal fdm=manual
setlocal fde=0
setlocal fmr={{{,}}}
setlocal fdi=#
setlocal fdl=0
setlocal fml=1
setlocal fdn=20
setlocal fen
silent! normal! zE
let s:l = 50 - ((17 * winheight(0) + 13) / 26)
if s:l < 1 | let s:l = 1 | endif
exe s:l
normal! zt
50
normal! 07|
lcd ~/svelte_projects/card-workout
wincmd w
4wincmd w
exe '1resize ' . ((&lines * 26 + 27) / 55)
exe 'vert 1resize ' . ((&columns * 115 + 115) / 230)
exe '2resize ' . ((&lines * 26 + 27) / 55)
exe 'vert 2resize ' . ((&columns * 115 + 115) / 230)
exe '3resize ' . ((&lines * 26 + 27) / 55)
exe 'vert 3resize ' . ((&columns * 114 + 115) / 230)
exe '4resize ' . ((&lines * 26 + 27) / 55)
exe 'vert 4resize ' . ((&columns * 114 + 115) / 230)
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
