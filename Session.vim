let SessionLoad = 1
let s:so_save = &so | let s:siso_save = &siso | set so=0 siso=0
let v:this_session=expand("<sfile>:p")
silent only
cd ~/svelte_projects/card-workout
if expand('%') == '' && !&modified && line('$') <= 1 && getline(1) == ''
  let s:wipebuf = bufnr('%')
endif
set shortmess=aoO
badd +38 src/lib/components/cards/NopeNotNowButton.svelte
badd +2 src/lib/components/cards/DeckInfoWidget.svelte
badd +1 src/lib/components/cards/RankInfoBox.svelte
badd +2 src/lib/components/cards/CardsInfoWidget.svelte
badd +54 src/routes/cards/+layout.svelte
badd +1 src/lib/components/cards/RankInfoWidget.svelte
badd +1 src/lib/components/cards/SuitInfoWidget.svelte
argglobal
%argdel
$argadd .
edit src/lib/components/cards/RankInfoWidget.svelte
set splitbelow splitright
wincmd _ | wincmd |
vsplit
wincmd _ | wincmd |
vsplit
wincmd _ | wincmd |
vsplit
3wincmd h
wincmd w
wincmd w
wincmd w
set nosplitbelow
set nosplitright
wincmd t
set winminheight=0
set winheight=1
set winminwidth=0
set winwidth=1
exe 'vert 1resize ' . ((&columns * 70 + 141) / 282)
exe 'vert 2resize ' . ((&columns * 70 + 141) / 282)
exe 'vert 3resize ' . ((&columns * 70 + 141) / 282)
exe 'vert 4resize ' . ((&columns * 69 + 141) / 282)
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
let s:l = 1 - ((0 * winheight(0) + 32) / 64)
if s:l < 1 | let s:l = 1 | endif
exe s:l
normal! zt
1
normal! 0
lcd ~/svelte_projects/card-workout
wincmd w
argglobal
if bufexists("~/svelte_projects/card-workout/src/lib/components/cards/SuitInfoWidget.svelte") | buffer ~/svelte_projects/card-workout/src/lib/components/cards/SuitInfoWidget.svelte | else | edit ~/svelte_projects/card-workout/src/lib/components/cards/SuitInfoWidget.svelte | endif
setlocal fdm=manual
setlocal fde=0
setlocal fmr={{{,}}}
setlocal fdi=#
setlocal fdl=0
setlocal fml=1
setlocal fdn=20
setlocal fen
silent! normal! zE
let s:l = 26 - ((25 * winheight(0) + 32) / 64)
if s:l < 1 | let s:l = 1 | endif
exe s:l
normal! zt
26
normal! 0
lcd ~/svelte_projects/card-workout
wincmd w
argglobal
if bufexists("~/svelte_projects/card-workout/src/lib/components/cards/RankInfoWidget.svelte") | buffer ~/svelte_projects/card-workout/src/lib/components/cards/RankInfoWidget.svelte | else | edit ~/svelte_projects/card-workout/src/lib/components/cards/RankInfoWidget.svelte | endif
setlocal fdm=manual
setlocal fde=0
setlocal fmr={{{,}}}
setlocal fdi=#
setlocal fdl=0
setlocal fml=1
setlocal fdn=20
setlocal fen
silent! normal! zE
let s:l = 2 - ((1 * winheight(0) + 32) / 64)
if s:l < 1 | let s:l = 1 | endif
exe s:l
normal! zt
2
normal! 03|
lcd ~/svelte_projects/card-workout
wincmd w
argglobal
if bufexists("~/svelte_projects/card-workout/src/lib/components/cards/DeckInfoWidget.svelte") | buffer ~/svelte_projects/card-workout/src/lib/components/cards/DeckInfoWidget.svelte | else | edit ~/svelte_projects/card-workout/src/lib/components/cards/DeckInfoWidget.svelte | endif
setlocal fdm=manual
setlocal fde=0
setlocal fmr={{{,}}}
setlocal fdi=#
setlocal fdl=0
setlocal fml=1
setlocal fdn=20
setlocal fen
silent! normal! zE
let s:l = 13 - ((12 * winheight(0) + 32) / 64)
if s:l < 1 | let s:l = 1 | endif
exe s:l
normal! zt
13
normal! 03|
lcd ~/svelte_projects/card-workout
wincmd w
exe 'vert 1resize ' . ((&columns * 70 + 141) / 282)
exe 'vert 2resize ' . ((&columns * 70 + 141) / 282)
exe 'vert 3resize ' . ((&columns * 70 + 141) / 282)
exe 'vert 4resize ' . ((&columns * 69 + 141) / 282)
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
