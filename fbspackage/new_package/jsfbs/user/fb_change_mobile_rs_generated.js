// automatically generated by the FlatBuffers compiler, do not modify

/**
 * @const
 * @namespace
 */
var commonpack = commonpack || {};

/**
 * @const
 * @namespace
 */
var userpack = userpack || {};

/**
 * @constructor
 */
userpack.T_CHANGE_MOBILE_RS = function() {
  /**
   * @type {flatbuffers.ByteBuffer}
   */
  this.bb = null;

  /**
   * @type {number}
   */
  this.bb_pos = 0;
};

/**
 * @param {number} i
 * @param {flatbuffers.ByteBuffer} bb
 * @returns {userpack.T_CHANGE_MOBILE_RS}
 */
userpack.T_CHANGE_MOBILE_RS.prototype.__init = function(i, bb) {
  this.bb_pos = i;
  this.bb = bb;
  return this;
};

/**
 * @param {flatbuffers.ByteBuffer} bb
 * @param {userpack.T_CHANGE_MOBILE_RS=} obj
 * @returns {userpack.T_CHANGE_MOBILE_RS}
 */
userpack.T_CHANGE_MOBILE_RS.getRootAsT_CHANGE_MOBILE_RS = function(bb, obj) {
  return (obj || new userpack.T_CHANGE_MOBILE_RS).__init(bb.readInt32(bb.position()) + bb.position(), bb);
};

/**
 * @param {commonpack.S_RS_HEAD=} obj
 * @returns {commonpack.S_RS_HEAD}
 */
userpack.T_CHANGE_MOBILE_RS.prototype.sRsHead = function(obj) {
  var offset = this.bb.__offset(this.bb_pos, 4);
  return offset ? (obj || new commonpack.S_RS_HEAD).__init(this.bb_pos + offset, this.bb) : null;
};

/**
 * @returns {flatbuffers.Long}
 */
userpack.T_CHANGE_MOBILE_RS.prototype.oldMoblie = function() {
  var offset = this.bb.__offset(this.bb_pos, 6);
  return offset ? this.bb.readUint64(this.bb_pos + offset) : this.bb.createLong(0, 0);
};

/**
 * @returns {flatbuffers.Long}
 */
userpack.T_CHANGE_MOBILE_RS.prototype.newMoblie = function() {
  var offset = this.bb.__offset(this.bb_pos, 8);
  return offset ? this.bb.readUint64(this.bb_pos + offset) : this.bb.createLong(0, 0);
};

/**
 * @param {flatbuffers.Builder} builder
 */
userpack.T_CHANGE_MOBILE_RS.startT_CHANGE_MOBILE_RS = function(builder) {
  builder.startObject(3);
};

/**
 * @param {flatbuffers.Builder} builder
 * @param {flatbuffers.Offset} sRsHeadOffset
 */
userpack.T_CHANGE_MOBILE_RS.addSRsHead = function(builder, sRsHeadOffset) {
  builder.addFieldStruct(0, sRsHeadOffset, 0);
};

/**
 * @param {flatbuffers.Builder} builder
 * @param {flatbuffers.Long} oldMoblie
 */
userpack.T_CHANGE_MOBILE_RS.addOldMoblie = function(builder, oldMoblie) {
  builder.addFieldInt64(1, oldMoblie, builder.createLong(0, 0));
};

/**
 * @param {flatbuffers.Builder} builder
 * @param {flatbuffers.Long} newMoblie
 */
userpack.T_CHANGE_MOBILE_RS.addNewMoblie = function(builder, newMoblie) {
  builder.addFieldInt64(2, newMoblie, builder.createLong(0, 0));
};

/**
 * @param {flatbuffers.Builder} builder
 * @returns {flatbuffers.Offset}
 */
userpack.T_CHANGE_MOBILE_RS.endT_CHANGE_MOBILE_RS = function(builder) {
  var offset = builder.endObject();
  return offset;
};

/**
 * @param {flatbuffers.Builder} builder
 * @param {flatbuffers.Offset} offset
 */
userpack.T_CHANGE_MOBILE_RS.finishT_CHANGE_MOBILE_RSBuffer = function(builder, offset) {
  builder.finish(offset);
};

// Exports for Node.js and RequireJS
this.commonpack = commonpack;
this.userpack = userpack;
