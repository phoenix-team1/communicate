# automatically generated by the FlatBuffers compiler, do not modify

# namespace: ecpack

import flatbuffers

class T_EC_GETRECENTORDERS_RQ(object):
    __slots__ = ['_tab']

    @classmethod
    def GetRootAsT_EC_GETRECENTORDERS_RQ(cls, buf, offset):
        n = flatbuffers.encode.Get(flatbuffers.packer.uoffset, buf, offset)
        x = T_EC_GETRECENTORDERS_RQ()
        x.Init(buf, n + offset)
        return x

    # T_EC_GETRECENTORDERS_RQ
    def Init(self, buf, pos):
        self._tab = flatbuffers.table.Table(buf, pos)

    # T_EC_GETRECENTORDERS_RQ
    def SRqHead(self):
        o = flatbuffers.number_types.UOffsetTFlags.py_type(self._tab.Offset(4))
        if o != 0:
            x = o + self._tab.Pos
            from .S_RQ_HEAD import S_RQ_HEAD
            obj = S_RQ_HEAD()
            obj.Init(self._tab.Bytes, x)
            return obj
        return None

    # T_EC_GETRECENTORDERS_RQ
    def SellerId(self):
        o = flatbuffers.number_types.UOffsetTFlags.py_type(self._tab.Offset(6))
        if o != 0:
            return self._tab.Get(flatbuffers.number_types.Uint64Flags, o + self._tab.Pos)
        return 0

    # T_EC_GETRECENTORDERS_RQ
    def BuyerId(self):
        o = flatbuffers.number_types.UOffsetTFlags.py_type(self._tab.Offset(8))
        if o != 0:
            return self._tab.Get(flatbuffers.number_types.Uint64Flags, o + self._tab.Pos)
        return 0

def T_EC_GETRECENTORDERS_RQStart(builder): builder.StartObject(3)
def T_EC_GETRECENTORDERS_RQAddSRqHead(builder, sRqHead): builder.PrependStructSlot(0, flatbuffers.number_types.UOffsetTFlags.py_type(sRqHead), 0)
def T_EC_GETRECENTORDERS_RQAddSellerId(builder, sellerId): builder.PrependUint64Slot(1, sellerId, 0)
def T_EC_GETRECENTORDERS_RQAddBuyerId(builder, buyerId): builder.PrependUint64Slot(2, buyerId, 0)
def T_EC_GETRECENTORDERS_RQEnd(builder): return builder.EndObject()
