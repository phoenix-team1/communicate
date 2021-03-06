// automatically generated by the FlatBuffers compiler, do not modify

package momentspack

import (
	flatbuffers "github.com/google/flatbuffers/go"
)

type T_MOMENTS_ARTICLE_ADD_RS struct {
	_tab flatbuffers.Table
}

func GetRootAsT_MOMENTS_ARTICLE_ADD_RS(buf []byte, offset flatbuffers.UOffsetT) *T_MOMENTS_ARTICLE_ADD_RS {
	n := flatbuffers.GetUOffsetT(buf[offset:])
	x := &T_MOMENTS_ARTICLE_ADD_RS{}
	x.Init(buf, n+offset)
	return x
}

func (rcv *T_MOMENTS_ARTICLE_ADD_RS) Init(buf []byte, i flatbuffers.UOffsetT) {
	rcv._tab.Bytes = buf
	rcv._tab.Pos = i
}

func (rcv *T_MOMENTS_ARTICLE_ADD_RS) SRsHead(obj *S_RS_HEAD) *S_RS_HEAD {
	o := flatbuffers.UOffsetT(rcv._tab.Offset(4))
	if o != 0 {
		x := o + rcv._tab.Pos
		if obj == nil {
			obj = new(S_RS_HEAD)
		}
		obj.Init(rcv._tab.Bytes, x)
		return obj
	}
	return nil
}

func (rcv *T_MOMENTS_ARTICLE_ADD_RS) PeerUserId() uint64 {
	o := flatbuffers.UOffsetT(rcv._tab.Offset(6))
	if o != 0 {
		return rcv._tab.GetUint64(o + rcv._tab.Pos)
	}
	return 0
}

func (rcv *T_MOMENTS_ARTICLE_ADD_RS) MutatePeerUserId(n uint64) bool {
	return rcv._tab.MutateUint64Slot(6, n)
}

func (rcv *T_MOMENTS_ARTICLE_ADD_RS) ArticleId() uint64 {
	o := flatbuffers.UOffsetT(rcv._tab.Offset(8))
	if o != 0 {
		return rcv._tab.GetUint64(o + rcv._tab.Pos)
	}
	return 0
}

func (rcv *T_MOMENTS_ARTICLE_ADD_RS) MutateArticleId(n uint64) bool {
	return rcv._tab.MutateUint64Slot(8, n)
}

func T_MOMENTS_ARTICLE_ADD_RSStart(builder *flatbuffers.Builder) {
	builder.StartObject(3)
}
func T_MOMENTS_ARTICLE_ADD_RSAddSRsHead(builder *flatbuffers.Builder, sRsHead flatbuffers.UOffsetT) {
	builder.PrependStructSlot(0, flatbuffers.UOffsetT(sRsHead), 0)
}
func T_MOMENTS_ARTICLE_ADD_RSAddPeerUserId(builder *flatbuffers.Builder, peerUserId uint64) {
	builder.PrependUint64Slot(1, peerUserId, 0)
}
func T_MOMENTS_ARTICLE_ADD_RSAddArticleId(builder *flatbuffers.Builder, articleId uint64) {
	builder.PrependUint64Slot(2, articleId, 0)
}
func T_MOMENTS_ARTICLE_ADD_RSEnd(builder *flatbuffers.Builder) flatbuffers.UOffsetT {
	return builder.EndObject()
}
